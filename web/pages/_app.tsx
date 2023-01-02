import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {SessionProvider} from 'next-auth/react';
import { Session } from "next-auth";

interface AppAuthProps extends AppProps {
  session: Session;
}

export default function App({ Component, pageProps, session }: AppAuthProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
