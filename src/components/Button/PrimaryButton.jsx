import Button from "@mui/material/Button";

export default function PrimaryButton({children, ...props}) {
    return (
        <Button
            variant="contained"
            fullWidth
            size="large"
            {...props}
        >
            {children}
        </Button>
    );
}