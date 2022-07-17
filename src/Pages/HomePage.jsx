import Sidebar from "./../components/Sidebar";
import { Box, HStack, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodoGet } from "../Redux/AppReducer/action.js";
import TodoItem from "./../components/TodoItem";
import { useSearchParams } from "react-router-dom";

export const HomePage = () => {
  const todos = useSelector((state) => state.AppReducer.todos);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [listofItems, setList] = useState(searchParams.getAll("tags") || []);
  useEffect(() => {
    document.title="Redux CRUD App"
  }, [])
  useEffect(() => {
    const dataList = searchParams.getAll("tags");
    setList(dataList);
  }, [searchParams]);

  useEffect(() => {
    dispatch(getTodoGet());
  }, [dispatch]);
  const listOfState = ["Todo", "In-Progress", "Done"];
  const color = ["green", "yellow", "blue"];
  const sdsjds = todos.filter((el,i) => el.tags.includes(""));
  console.log(sdsjds);
  return (
    <Box bg="pink">
      <HStack>
        <Sidebar />

        {listOfState?.map((el, index) => (
          <Grid
            textAlign="center"
            w="100%"
            templateColumns="repeat(3, 1fr)"
            key={index}
          >
            <Box border="1px solid red" w="350px" h="100vh">
              <Text
                bg={`${color[index]}.100`}
                p="3"
                textTransform={"uppercase"}
              >
                {el}
              </Text>
              {todos.length > 0 &&
                todos

                  .filter((item) => item.task_status === el)
       
                  .map((item) => <TodoItem key={item.id} {...item} />)}
            </Box>
          </Grid>
        ))}
      </HStack>
    </Box>
  );
};
