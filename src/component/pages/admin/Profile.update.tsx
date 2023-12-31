import {Container} from "../../atoms";
import ProfileUpdateData from "../../molecules/admin/Profile/update";
import AdminTemplate from "../../templates/admin";

function ProfileAdminUpdate() {
  return (
    <AdminTemplate>
      Dashboard
      <div className=""></div>
      <Container>
        <ProfileUpdateData />
      </Container>
    </AdminTemplate>
  );
}

export default ProfileAdminUpdate;
