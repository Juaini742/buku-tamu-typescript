import {Container, Hed1, Paragraph} from "../../atoms";
import ProfileData from "../../molecules/client/Profile";
import Templates from "../../templates";

function Profile() {
  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
        <Paragraph variant="subTitile">
          Selamat datang di halaman Profil
        </Paragraph>
        <ProfileData />
      </Container>
    </Templates>
  );
}

export default Profile;
