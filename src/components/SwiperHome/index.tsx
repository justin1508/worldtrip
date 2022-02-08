
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Flex, Image } from "@chakra-ui/react";

export default function SwiperHome() {
	return (
		<Flex w={[375, 640]} h={[250, 427]} cursor="pointer">
			<Swiper
				cssMode={true}
				navigation={true}
				pagination={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
			>

				<SwiperSlide> <Link href="/europe" passHref><Image boxSize="100%" src="/images/europa.jpg" alt="Europe" /></Link></SwiperSlide>
				<SwiperSlide> <Link href="/europe" passHref><Image src="/images/americaSouth.jpg" alt="South America" /></Link></SwiperSlide>
				<SwiperSlide> <Link href="/europe" passHref><Image src="/images/africa.jpg" alt="Africa" /></Link></SwiperSlide>
				<SwiperSlide> <Link href="/europe" passHref><Image src="/images/asia.jpg" alt="Asia" /></Link></SwiperSlide>
				<SwiperSlide> <Link href="/europe" passHref><Image src="/images/americaNorth.jpg" alt="North America" /></Link></SwiperSlide>
				<SwiperSlide> <Link href="/europe" passHref><Image src="/images/oceania.jpg" alt="Oceania" /></Link></SwiperSlide>


			</Swiper >

		</Flex >
	);
}