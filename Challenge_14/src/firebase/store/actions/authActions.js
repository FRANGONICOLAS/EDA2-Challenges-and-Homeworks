import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../../config';
import { loginSuccess, logoutSuccess } from '../Slice/AuthSlice';

export const loginWithEmail = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch(loginSuccess(userCredential.user));
  } catch (error) {
    console.error('Error logging in with email and password:', error);
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch(loginSuccess(result.user));
  } catch (error) {
    console.error('Error logging in with Google:', error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logoutSuccess());
  } catch (error) {
    console.error('Error logging out:', error);
  }
};