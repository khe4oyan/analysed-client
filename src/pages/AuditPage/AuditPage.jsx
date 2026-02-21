// components
import Audit from "../../components/Audit";

// hooks
import useAudit from "../../hooks/useAudit";

// styles
import classes from "./styles.module.css";

export default function AuditPage() {
  const { audit } = useAudit();
  
  return (
    <div className={classes.root}>
      {audit.map((auditData) => (
        <Audit data={auditData} key={auditData.id} />
      ))}
    </div>
  );
}
