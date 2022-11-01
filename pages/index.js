import Main from '../components/Main/Main';
import Head from 'next/head';
import Header from '../components/Header/Header';

export default function Home() {
	return (
		<>
			<Head>
				<title>INTEX - MARKET</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href={'/Assets/Images/Logo/logo.svg'} />
			</Head>
			<Header />
			<Main />
		</>
	);
}
