import { Box, Text, Badge, Checkbox, Flex } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
const TodoItem = ({ id, title, discription, task_status, tags, subTasks }) => {
  const colorTags = ["green", "yellow", "blue"];
  
  return (
    <Box
      border={"1px solid #111"}
      w="90%"
      m="auto"
      mt="22px"
      p="12px"
      pt="0"
      textTransform="capitalize"
    >
      <Flex justifyContent="space-between" placeItems="center">
        <Text fontSize="22px" fontWeight="500" textAlign="start">
          {title}
        </Text>
        <EditIcon />
      </Flex>
      <Flex gap="12px">
        {tags.map((el, index) => (
          <Badge key={index} colorScheme={`${colorTags[index]}`}>
            {el}
          </Badge>
        ))}
      </Flex>
      <Text textAlign="start">{discription}</Text>
      {subTasks.map((el, index) => (
        <Flex key={index} gap="12px" placeItems="center">
          <Checkbox type="checkbox" />
          <Text>{el.subTaskTitle}</Text>
        </Flex>
      ))}
    </Box>
  );
};
export default TodoItem;
