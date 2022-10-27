
import Main from '../components/Main/Main';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Home() {
	return (
		<>
			<Head>
				<title>Intex shop</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href={''} />
			</Head>

			<Header /> {/*Nurillo Headerni oldi*/}
			<Main/>  {/* Main componentaga otilar shu yerga bolib qoyganman */}

			{/* <Header /> Nurillo Headerni oldi */}
			{/* <Hero/> Nurillo Hero oldi */}
			{/* <Popular/> Nozimjon Популярные товары oldi */}
			<Footer />

		</>
	);

}