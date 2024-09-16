import { useRuntimeConfig } from '#app';

export const getArticles = async () => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;
  console.log(apiBase);
  try {
    const articles = await $fetch(`${apiBase}/articles`);
    console.log('API response:', articles); // Log the API response
    return { articles };
  } catch (error) {
    console.error('Error fetching articles from API:', error);
    throw error;
  }
};