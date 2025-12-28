import { ResponsiveDialog } from "@/components/responsive-dialog";
import React from "react";
import AgentForm from "./agent-form";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const NewAgentDialog = (props: Props) => {
  const { open, onOpenChange } = props;

  return (
    <ResponsiveDialog
      title="New Agent"
      description="Create a new agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};

export default NewAgentDialog;
