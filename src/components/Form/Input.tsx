import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export default function Input(props: IInputProps) {
  return (
    <FormControl>
      {!!props.label && (
        <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      )}

      <ChakraInput
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        _hover={{
          backgroundColor: "gray.900",
        }}
        size="lg"
        name={props.name}
        id={props.name}
        {...props}
      />
    </FormControl>
  );
}
