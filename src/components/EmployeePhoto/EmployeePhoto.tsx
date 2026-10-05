import styles from "./EmployeePhoto.module.css";

type EmployeePhotoProps = {
  photoUrl: string | null;
  alt: string;
};

export function EmployeePhoto({ photoUrl, alt }: EmployeePhotoProps) {
  if (!photoUrl) {
    return <div className={styles.photo} role="img" aria-label={alt} />;
  }

  return <img className={styles.photo} src={photoUrl} alt={alt} />;
}
