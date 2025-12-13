import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

import type esMessagesType from '@/messages/es.json';
import type enMessagesType from '@/messages/en.json';

const getMessages = async (locale: string) => {
  if (locale === 'en') {
    return (await import('@/messages/en.json')).default as typeof enMessagesType;
  }
  return (await import('@/messages/es.json')).default as typeof esMessagesType;
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = await getMessages(locale);

  return {
    locale,
    messages
  };
});

