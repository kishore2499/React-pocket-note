import StyleNotesGrp from "./NotesGrp.module.css";

const NotesGrp = ({ id, groupName, color, buttonColorId, initials }) => {
  const NotesImage = {
    backgroundColor: `${color}`,
    borderRadius: "50%",
    minWidth: "61px",
    minHeight: "61px",

    // text
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: "1.50719rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "97.688%" /* 1.47238rem */,
    letterSpacing: "0.03013rem",

    // center
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // UpperCase
    textTransform: "uppercase"
  };

  return (
    <div className={StyleNotesGrp.NotesGroup} style={{ backgroundColor: buttonColorId === id ? "#F7ECDC" : "transparent" }}>
      <div style={NotesImage}>
        {initials}
      </div>
      <div className={StyleNotesGrp.NotesName}>{groupName}</div>
    </div>
  );
};

export default NotesGrp;


