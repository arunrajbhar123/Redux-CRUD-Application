import { Box, VStack, Button, Text, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "./../Redux/AuthReducer/action";
const Sidebar = () => {
  const dispatch=useDispatch();
  const handleLogout=()=>{
    dispatch(logoutSuccess())
  }
  return (
    <Box border="1px solid orange" width="300px" height="100vh">
      <VStack gap="25px">
        <Box border="1px solid blue" width="100%" height="30vh">
          <Box p="5">
            <Text>Name</Text>
            <Text>Name</Text>
            <Text>Name</Text>
            <Text>Name</Text>
          </Box>
        </Box>
        <Box border="1px solid black" width="100%" height="50vh">
          <Box p="5">
            <Flex>
              <Text>All</Text>
              <Text>15</Text>
            </Flex>
            <Flex>
              <Text>Personal</Text>
              <Text>6</Text>
            </Flex>
            <Flex>
              <Text>User</Text>
              <Text>5</Text>
            </Flex>
            <Flex>
              <Text>Other</Text>
              <Text>4</Text>
            </Flex>
          </Box>
        </Box>
        <Box border="1px solid red" width="100%" height="10vh">
          <Button w="100%" h="100%" colorScheme={"red"}
          onClick={handleLogout}
          fontSize="32px"
          >
            Logout
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};
export default Sidebar;
