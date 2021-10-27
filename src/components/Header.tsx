import { Flex, Text, Input, Icon } from "@chakra-ui/react";

import { RiSearchLine } from "react-icons/ri";

export default function Header() {
  return (
    <Flex
      width="100%"
      as="header"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="64">
        dashgo
        <Text as="span" color="pink.500" marginLeft="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        color="gray.200"
        alignSelf="center"
        position="relative"
        backgroundColor="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    </Flex>
  );
}
