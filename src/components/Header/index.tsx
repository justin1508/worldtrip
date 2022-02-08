import { Flex, Image } from '@chakra-ui/react';

export function Header() {

	return (
		<Flex
			as="header"
			w="100%"
			align="center"
			justify="center"

		>
			<Flex
				w={[81, 184.06]}
				h={[10, 45.92]}
				mt={[0, 5]}
				mb={[0, 5]}
			>
				<Image src="/images/Logo.svg" alt="Airplane trip" />
			</Flex>

		</Flex>


	)
}