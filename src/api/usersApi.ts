import { User } from '../types/User';

const API_URL = 'https://reqres.in/api/users';

export const fetchUsers = async (page = 12): Promise<User[]> => {
  try {
    const response = await fetch(`${API_URL}?per_page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
    });
    const data = await response.json();
    console.log('Fetched users:', data);
    return data.data.map((u: any) => ({
      id: u.id,
      first_name: u.first_name,
      last_name: u.last_name,
      email: u.email,
      avatar: u.avatar,
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
