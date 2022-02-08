import { Divider, Flex, Heading, Text, VStack, Image, HStack, Stack } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import SwiperHome from "../../components/SwiperHome";
import { TravelTrip } from "../../components/TravelTrip";

export default function Home() {
	return (
		// <Flex w="100vw" h="100vh" align="center" justify="center">
		// </Flex>
		<VStack>
			<Header />

			<Flex maxW={1440} maxH={500}>
				<Image src="/images/BannerEurope.svg" alt="Continente Europa" />
			</Flex>

			<Stack direction={["column", "row"]} spacing="20" maxW={1440}>
				<Flex maxW={400} ml={[0, 100]} >
					<Text mt="10" align="justify" fontSize={["10", "15"]}>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.</Text>
				</Flex>
				<Flex >
					<Image src="/images/Info.svg" alt="informações Europa" />
				</Flex>
			</Stack>

			<Flex direction="column" w="100%" maxWidth={1440} >
				<Heading ml={[50, 200]} mt="10">Cidades +100</Heading>
				<Flex ml={[50, 200]} mt="8" gap="8" maxWidth={900} flexWrap="wrap" >
					<Image src="/images/Amsterda.svg" alt="Amsterda City" />
					<Image src="/images/Londres.svg" alt="Londres City" />
					<Image src="/images/Paris.svg" alt="Paris City" />
					<Image src="/images/Praga.svg" alt="Praga City" />
					<Image src="/images/Roma.svg" alt="Roma City" />
				</Flex>
			</Flex>


		</VStack >
	)
}
