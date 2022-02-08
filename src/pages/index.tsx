import { Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import SwiperHome from "../components/SwiperHome";
import { TravelTrip } from "../components/TravelTrip";

export default function Home() {
	return (
		// <Flex w="100vw" h="100vh" align="center" justify="center">
		// </Flex>
		<VStack>
			<Header />
			<Banner />
			<TravelTrip />
			<Flex h="8">
				<Divider m="auto" w={90} bg="black" h={0.5} />
			</Flex>
			<VStack spacing={["4", "10"]}>
				<Heading mt="4" fontSize={["20", "40"]}>Vamos nessa?</Heading>
				<Heading fontSize={["20", "40"]}>Então escolha seu continente</Heading>
				<SwiperHome />
			</VStack>
			<Flex >

			</Flex>
		</VStack >
	)
}
