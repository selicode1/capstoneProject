// apiService.js
export const fetchDashboardStats = async (user_id) => {
    try {
      const response = await fetch(`http://192.168.32.233/api/farmer_dashboard/${user_id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      return null;
    }
  };
  