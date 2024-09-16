import { useRuntimeConfig } from '#app';

export const getUsers = async () => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;
  try {
    const users = await $fetch(`${apiBase}/users`);
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
