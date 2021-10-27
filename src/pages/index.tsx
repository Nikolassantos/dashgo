import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="gray.800"
        padding={8}
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input name="email" type="email" label="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>

            <Input name="password" type="password" label="senha" />
          </FormControl>
        </Stack>

        <Button type="submit" size="lg" marginTop={6} colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
