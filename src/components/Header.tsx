import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";

import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

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

      <Flex alight="center" ml="auto">
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="8"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
      </Flex>

      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Nikolas dos Santos</Text>
          <Text color="gray.300" fontSize="small">
            nikolassantoshttp@gmail.com
          </Text>
        </Box>

        <Avatar
          size="md"
          name="Nikolas dos Santos"
          src="https://avatars.githubusercontent.com/u/58566087?v=4"
        />
      </Flex>
    </Flex>
  );
}
