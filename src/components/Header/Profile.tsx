import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Tenorio</Text>
          <Text color="gray.300" fontSize="small">
            gabriel-tenorio25@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Tenorio"
        src="https://github.com/gahtenorio.png"
      />
    </Flex>
  );
}
