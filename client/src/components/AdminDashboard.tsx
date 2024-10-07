import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define types for our data
type PetGroup = {
  name: string;
  adopted: number;
  remaining: number;
  image: string;
};

type RevenueData = {
  month: string;
  revenue: number;
};

// Hardcoded data
const petGroups: PetGroup[] = [
  { name: 'Dogs', adopted: 33, remaining: 15, image: "../../../uploads/dogVector.jpg" },
  { name: 'Cats', adopted: 32, remaining: 20, image: "../../../uploads/catVector.avif"},
  { name: 'Birds', adopted: 22, remaining: 25, image: "../../../uploads/birdVector.jpg"},
  { name: 'Rabbits', adopted: 19, remaining: 11, image: "../../../uploads/rabbitVector.jpg" },
  { name: 'Rats', adopted: 3, remaining: 1, image: "../../../uploads/ratVector.jpg" },
  { name: 'Chickens', adopted: 27, remaining: 30, image:  "../../../uploads/chickenVector.webp"},
];

const revenueData: RevenueData[] = [
  { month: 'Jan', revenue: 345 },
  { month: 'Feb', revenue: 654 },
  { month: 'Mar', revenue: 678 },
  { month: 'Apr', revenue: 879 },
  { month: 'May', revenue: 765 },
  { month: 'Jun', revenue: 879 },
  { month: 'Jul', revenue: 900 },
  { month: 'Aug', revenue: 979 },
  { month: 'Sept', revenue: 889 },
  { month: 'Oct', revenue: 780 },
];

const totalRevenue = revenueData.reduce((sum, month) => sum + month.revenue, 0);
const totalAdopted = petGroups.reduce((sum, group) => sum + group.adopted, 0);

// Prepare data for the chart
const revenueChartData = {
  labels: revenueData.map((data) => data.month),
  datasets: [
    {
      label: 'Revenue',
      data: revenueData.map((data) => data.revenue),
      fill: false,
      backgroundColor: '#2980b9',
      borderColor: '#2980b9',
      tension: 0.2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly Revenue',
    },
  },
};

// Styles with explicit typing
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f4f8',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#2c3e50',
  },
  chartContainer: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '15px',
    width: '45%',
    backgroundColor: '#f8f9fa', // Light gray background for cards
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  cardTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#34495e',
    backgroundColor: '#dfe6e9', // Subtle light blue header background
    padding: '10px',
    borderRadius: '4px',
  },
  cardValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2c3e50', // Darker font color for contrast
  },
  petCardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  petCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '15px',
    width: '45%',
    marginBottom: '20px',
    backgroundColor: '#f8f9fa', // Light background for pets card
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  petCardContent: {
    display: 'flex',
    alignItems: 'center',
  },
  petImage: {
    width: '50px',
    height: '50px',
    marginRight: '15px',
    borderRadius: '25px',
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: '18px',
    marginBottom: '5px',
    color: '#34495e',
  },
  petStat: {
    margin: '2px 0',
    color: '#7f8c8d',
  },
};

export const AdminDashboard: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Dashboard</h1>
      
      {/* Line Chart at the top of the page */}
      <div style={styles.chartContainer}>
        <Line data={revenueChartData} options={chartOptions} />
      </div>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Total Adoptions</h2>
          <p style={styles.cardValue}>{totalAdopted}</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Total Revenue</h2>
          <p style={styles.cardValue}>Rs. {totalRevenue.toLocaleString()}</p>
        </div>
      </div>

      <div style={styles.petCardContainer}>
        {petGroups.map((group) => (
          <div key={group.name} style={styles.petCard}>
            <div style={styles.petCardContent}>
              <img src={group.image} alt={group.name} style={styles.petImage} />
              <div style={styles.petInfo}>
                <h3 style={styles.petName}>{group.name}</h3>
                <p style={styles.petStat}>Adopted: {group.adopted}</p>
                <p style={styles.petStat}>Remaining: {group.remaining}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
