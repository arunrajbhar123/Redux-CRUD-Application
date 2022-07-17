import { Box, VStack, Button, Text, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess, getUserDetails } from "./../Redux/AuthReducer/action";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const Sidebar = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [tags, setTags] = useState(searchParams.getAll("tags") || []);
  const handleLogout = () => {
    dispatch(logoutSuccess());
  };
  const userData = useSelector((state) => state.AuthReducer.userDetails);

  useEffect(() => {
    dispatch(getUserDetails("masai-school"));
  }, [dispatch]);

  const todoslist = useSelector((state) => state.AppReducer.todos);

  let progressCount = todoslist.filter(
    (item) => item.task_status === "In-Progress"
  );
  let personalCount = todoslist.filter((item) => item.task_status === "Todo");
  let officalCount = todoslist.filter((item) => item.task_status === "Done");
  const handleFilter = (val) => {
    let dataQuery = [...tags];
    if (tags.includes(val)) {
      dataQuery.splice(dataQuery.indexOf(val), 1);
    } else {
      dataQuery.push(val);
    }
    setTags(dataQuery);
  };
  useEffect(() => {
    const finalTags = {
      tags,
    };
    setSearchParams(finalTags);
  }, [setSearchParams, tags]);

  return (
    <Box border="1px solid orange" width="300px" height="100vh">
      <VStack gap="25px">
        <Box border="1px solid blue" width="100%" height="30vh">
          <Flex p="5">
            <Box>
              <Text>Name:</Text>
              <Text>Username: </Text>
              <Text>Email: </Text>
              <Text>Mobile: </Text>
              <Text>Des: </Text>
            </Box>

            <Box>
              <Text>{userData.name}</Text>
              <Text>{userData.username}</Text>
              <Text>{userData.email}</Text>
              <Text>{userData.mobile}</Text>
              <Text>{userData.description}</Text>
            </Box>
          </Flex>
        </Box>
        <Box border="1px solid black" width="100%" height="50vh">
          <Box p="3">
            <Flex justifyContent="space-between" bg="blue.100" mt="1" p="2">
              <Text onClick={() => handleFilter("All")}>All</Text>
              {todoslist.length}
            </Flex>
            <Flex justifyContent="space-between" bg="green.100" mt="1" p="2">
              <Text onClick={() => handleFilter("Personal")}>Personal</Text>
              {personalCount.length}
            </Flex>
            <Flex justifyContent="space-between" bg="yellow.100" mt="1" p="2">
              <Text onClick={() => handleFilter("Official")}>Official</Text>
              {progressCount.length}
            </Flex>
            <Flex justifyContent="space-between" bg="orange.200" mt="1" p="2">
              <Text onClick={() => handleFilter("Other")}>Other</Text>
              {officalCount.length}
            </Flex>
          </Box>
        </Box>
        <Box border="1px solid red" width="100%" height="10vh">
          <Button
            w="100%"
            h="100%"
            colorScheme={"red"}
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
