import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingGetOne } from "../../type";
import MeetingForm from "./meeting-form";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: MeetingGetOne;
};

const UpdateMeetingDialog = (props: Props) => {
  const { open, onOpenChange, initialValues } = props;

  return (
    <ResponsiveDialog
      title="Edit Meeting"
      description="Edit the meeting details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={(id) => {
          onOpenChange(false);
        }}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};

export default UpdateMeetingDialog;
