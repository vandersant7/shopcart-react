import TextField from "@mui/material/TextField";

export default function Input({ label, type, ...props }) {
    return (
        <TextField
            label={label}
            type={type}
            fullWidth
            variant="outlined"
            {...props}
        />
    )
}