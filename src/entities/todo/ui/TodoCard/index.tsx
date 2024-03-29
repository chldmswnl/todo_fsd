import { useTodoContext } from "@/shared/context/TodoProvider";
import { Todo } from "@/shared/types/index.";
import * as S from "./TodoCard.styled";

export default function TodoCard({ title, checked }: Todo) {
  const { dispatch } = useTodoContext();
  return (
    <S.Wrapper>
      <S.TodoTitle $checked={checked}>{title}</S.TodoTitle>
      <S.RadioBtn
        $checked={checked}
        onClick={() =>
          dispatch({ type: "CHANGE_LIST", payload: { title: title } })
        }
      />
    </S.Wrapper>
  );
}
