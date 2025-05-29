'use client';

import store from '@/redux/store';
import { Provider } from 'react-redux';

export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
      <main>{children}</main>
    </Provider>
  );
}
