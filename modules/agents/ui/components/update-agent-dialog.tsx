import { ResponsiveDialog } from "@/components/responsive-dialog";
import React from "react";
import AgentForm from "./agent-form";
import { AgentGetOne } from "../../type";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
};

const UpdateAgentDialog = (props: Props) => {
  const { open, onOpenChange, initialValues } = props;

  return (
    <ResponsiveDialog
      title="Update Agent"
      description="Update the agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};

export default UpdateAgentDialog;
