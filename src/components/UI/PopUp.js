import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function PopUp({ children, open, onClose }) {
  return (
    <Dialog maxWidth="md" open={open} onClose={onClose}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default PopUp;
