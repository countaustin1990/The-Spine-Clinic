import {
  db,
  collection,
  addDoc,
  // getDocs,
  // updateDoc,
  // doc,
  // deleteDoc,
} from "../Firebase/Firebase";

interface BookingData {
  name: string;
  email: string;
  phone: string;
  appointment_date: string;
  appointment_time: string;
  reason: string;
}

interface messageData {
  name: string;
  email: string;
  message: string;
}

/**
 * Add a new document to Firestore.
 */
export const addBooking = async (userData: BookingData) => {
  try {
    const docRef = await addDoc(collection(db, "bookings"), userData);
    console.log("Booking added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding booking:", error);
  }
};

/**
 * Add a new document to Firestore.
 */
export const sendMessage = async (userData: messageData) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), userData);
    console.log("Booking added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding booking:", error);
  }
};

/**
 * Get all users from Firestore.
 */
// export const getUsers = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error("Error getting users:", error);
//   }
// };

/**
 * Update a user's data in Firestore.
 */
// export const updateUser = async (
//   userId: string,
//   updatedData: { name?: string; email?: string }
// ) => {
//   try {
//     const userDoc = doc(db, "users", userId);
//     await updateDoc(userDoc, updatedData);
//     console.log("User updated successfully!");
//   } catch (error) {
//     console.error("Error updating user:", error);
//   }
// };

/**
 * Delete a user from Firestore.
 */
// export const deleteUser = async (userId: string) => {
//   try {
//     const userDoc = doc(db, "users", userId);
//     await deleteDoc(userDoc);
//     console.log("User deleted successfully!");
//   } catch (error) {
//     console.error("Error deleting user:", error);
//   }
// };
