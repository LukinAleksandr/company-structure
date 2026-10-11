import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./EmployeePhoto.module.css";

type EmployeePhotoProps = {
  photoUrl: string | null;
  alt: string;
  size?: "medium" | "large";
};

export function EmployeePhoto({ photoUrl, alt, size = "medium" }: EmployeePhotoProps) {
  const className = joinClassNames(styles.photo, size === "large" && styles.large);

  if (!photoUrl) {
    return <div className={className} role="img" aria-label={alt} />;
  }

  return <img className={className} src={photoUrl} alt={alt} />;
}
