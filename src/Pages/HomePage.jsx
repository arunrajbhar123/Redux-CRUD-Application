import Sidebar from "./../components/Sidebar";
import { Box, HStack, Container, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodoGet } from "../Redux/AppReducer/action.js";
import TodoItem from "./../components/TodoItem";

export const HomePage = () => {
  const todos = useSelector((state) => state.AppReducer.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoGet());
  }, [dispatch]);

  return (
    <Box bg="pink" w="100%">
      <HStack>
        <Sidebar />
        <Stack direction="row" textAlign="center" width="100%" spacing="25px">
          <Box border="1px solid red" w="100%" h="100vh">
            {todos.length > 0 &&
              todos
                .filter((item) => item.task_status === "todo")
                .map((item) => <TodoItem key={item.id} />)}
          </Box>
          <Box border="1px solid red" w="100%" h="100vh">
            {todos.length > 0 &&
              todos
                .filter((item) => item.task_status === "progress")
                .map((item) => <TodoItem key={item.id} />)}
          </Box>
          <Box border="1px solid red" w="100%" h="100vh">
            {todos.length > 0 &&
              todos
                .filter((item) => item.task_status === "done")
                .map((item) => <TodoItem key={item.id} />)}
          </Box>
        </Stack>
      </HStack>
    </Box>
  );
};
