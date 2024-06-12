import { notFound } from "next/navigation";
import IssueForm from "../../_components/IssueForm";
import prisma from "@/prisma/prisma";

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  console.log(issue);

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
