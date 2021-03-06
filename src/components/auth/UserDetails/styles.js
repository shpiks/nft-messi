const styles = theme => ({
    root: {
        flexGrow: 1,
        top: "0",
        width: '100%',
        margin: '0 auto',
        position: "fixed",
        transform: 'scale(0.8)',
        [theme.breakpoints.down('md')]: {
            transform: 'scale(0.6)',
        },
        [theme.breakpoints.down('sm')]: {
            transform: 'scale(0.4)',
        },
    },
    grow: {
        flexGrow: 1,
    },
    main: {

    },
    container: {
        // marginTop: "10rem",
        paddingTop: theme.spacing(1),
    },
    spacer: {
        padding: "5px",
    },
    panel: {
        width: 600,
        margin: "0 auto",
        display: "grid",
        textAlign: "center",
        [theme.breakpoints.down('md')]: {
            width: 400,
            marginTop: "-100px"
        },
    },
    panelThankyou: {
        width: 600,
        margin: "0 auto",
        display: "grid",
        textAlign: "center",
    },
    inputContainer: {
        marginTop: "10px",
        textAlign: "left",
    },
    combinedInputs: {
        display: "flex",
    },
    inputField: {
        backgroundColor: "black",
        border: "2px solid #f3efde",
        borderRadius: "30px",
        marginBottom: "30px",
        // marginRight: "20px",
        color: "#f3efde",
        "& .MuiOutlinedInput-input": {
            marginLeft: 0,
            padding: "14px 14px",
        },

    },
    phoneNumberInput: {

        // border: "2px solid #f3efde",
        // borderRadius: "30px",
        // marginBottom: "30px",
        // marginRight: "20px",
        // color: "#f3efde",
        // "& .MuiOutlinedInput-input": {
        //     marginLeft: 0,
        //     padding: "14px 14px",
        // },
        "& .MuiOutlinedInput-root": {
            border: "2px solid #f3efde",
            backgroundColor: "black",
            borderRadius: "30px",
            color: "#f3efde",
        },
    },
    inputCheckbox: {
        color: "#f3efde",
        marginBottom: "10px",
    },
    panelButton: {
        color: "#000000",
        backgroundColor: "#fadf78",
        marginLeft: "3rem",
        marginRight: "3rem",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: "15px",
        "& .Mui-disabled": {
            color: "#000000",
            backgroundColor: "#fadf78",
        }

    },
    panelButtonText: {
        fontSize: "0.90rem",
        fontWeight: 600,
    },
    panelButtonBack: {
        color: "#ffffff",
    },
    panelButtonBackText: {
        fontWeight: 600,
    },
    link: {
        textDecoration: "none",
    },
    linkText: {
        color: "#ffffff",

    },
    thankYouText: {
        color: "#ffffff",
        fontWeight: 500,
    }
});

export default styles;
