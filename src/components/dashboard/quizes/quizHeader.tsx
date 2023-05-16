import { QuizIcon } from "@/lib/icons";
import Container from "../../ui/container";
import H2 from "../../ui/headings/h2";
import AddQuiz from "./addQuiz";
import type { Session } from "next-auth";

interface Props {
  session: Session;
}

export default function QuizDashboardHeader({ session }: Props) {
  return (
    <Container
      variant="solid-light"
      opacity="full"
      className="w-full lg:w-[400px] h-[120px] flex items-center justify-between px-4"
    >
      <section className="flex items-center gap-2">
        <QuizIcon className="w-20 h-20" />
        <H2>quizy</H2>
      </section>
      <AddQuiz uid={session.user?.id} />
    </Container>
  );
}
