import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./Audience.css";
import { useAuth } from "../AuthContext";

export default function Audience() {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [ratingSummary, setRatingSummary] = useState({
    average: 0,
    breakdown: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  });

  // Random Name Generator
  const generateRandomName = () => {
    const names = ["Young", "Thug", "Lil", "Hommie", "Quan", "Jay", "Ace", "Khalid"];
    return names[Math.floor(Math.random() * names.length)];
  };

  // Random Comment Generator
  const generateRandomComment = () => {
    const comments = [
      "One of the best farmers on the app",
      "Your product is good, but please work on the delivery sir",
      "My order may have delayed but everything was intact",
      "The world needs people like you",
      "🐄🐄🐄",
      "Super fast delivery!",
      "Quality was top-notch!",
      "Great communication, will buy again.",
    ];
    return comments[Math.floor(Math.random() * comments.length)];
  };

  // Function to generate random reviews
  const generateReviews = () => {
    const numReviews = Math.floor(Math.random() * 6) + 3; // Between 3 and 8 reviews
    const newReviews = Array.from({ length: numReviews }, (_, i) => ({
      id: i + 1,
      name: generateRandomName(),
      comment: generateRandomComment(),
      rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1-5
      avatar: `https://i.pravatar.cc/50?img=${Math.floor(Math.random() * 70) + 1}`,
    }));

    setReviews(newReviews);
    calculateRatingSummary(newReviews);
  };

  // Function to calculate rating statistics
  const calculateRatingSummary = (reviews) => {
    if (reviews.length === 0) return;

    const totalRatings = reviews.reduce((acc, review) => acc + review.rating, 0);
    const average = (totalRatings / reviews.length).toFixed(1);

    const breakdown = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach((review) => breakdown[review.rating]++);

    setRatingSummary({ average, breakdown });
  };

  useEffect(() => {
    generateReviews();
  }, []);

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = () => {
  //     const storedUser = localStorage.getItem("user");
  //     if (storedUser) {
  //       try {
  //         const parsedUser = JSON.parse(storedUser);
  //         if (parsedUser && parsedUser.username) {
  //           setUser(parsedUser);
  //         } else {
  //           console.error("Invalid user data in localStorage:", parsedUser);
  //           setUser(null);
  //         }
  //       } catch (error) {
  //         console.error("Error parsing user data:", error);
  //         setUser(null);
  //       }
  //     } else {
  //       setUser(null);
  //     }
  //   };

  //   fetchUser();
  //   window.addEventListener("userUpdated", fetchUser);

  //   return () => {
  //     window.removeEventListener("userUpdated", fetchUser);
  //   };
  // }, []);

  return (
    <div className="dash">
      <Sidebar />
      <div className="dashboard">
        <div className="dash-head">
          <h1 className="dash-title">Ratings</h1>
          <div className="icon">
            <i className="fi fi-rr-search ico"></i>
            <i className="fi fi-rr-list ico"></i>
            <i className="fi fi-rr-bell-notification-social-media ico"></i>
          </div>
        </div>

        <div className="review-container">
          {/* Profile Section */}
          <div className="profile-card">
            <div>
              <img src="/src/assets/user.png" alt="pro-pic" className="profile-pic" />
              <h3 className="user-name-review">{user || "Guest"}</h3>
              <p className="email">Lamar419@gmail.com</p>
            </div>
            <div className="rate-section">
              <h4>Ratings</h4>
              <div className="rating">
                <div className="rating-summary">
                  <h1>{ratingSummary.average}</h1>
                  <div>{reviews.length > 0 ? "Based on user reviews" : "N/A"}</div>
                  <p>{reviews.length > 0 ? `${reviews.length} Reviews` : "Loading..."}</p>
                </div>
                <div className="rating-breakdown">
                  {Object.entries(ratingSummary.breakdown)
                    .reverse()
                    .map(([stars, count]) => (
                      <div key={stars}>
                        <span>{stars}</span>
                        <div
                          className="bar"
                          style={{
                            width: `${(count / reviews.length) * 100}%`,
                            backgroundColor: count > 0 ? "#3366FF" : "#ddd",
                          }}
                        ></div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="reviews-card">
            <h3>Reviews</h3>
            {reviews.length === 0 ? (
              <p>No comments yet</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="review">
                  <img src={review.avatar} alt={review.name} className="avatar" />
                  <div className="review-content">
                    <div className="review-details">
                      <div>
                        <h6 style={{ fontWeight: "bold" }}>{review.name}</h6>
                        <p>{review.comment}</p>
                      </div>
                      <div className="stars">
                        {"⭐".repeat(review.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
