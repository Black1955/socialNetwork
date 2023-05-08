import { FC } from "react";
import { IPetList } from "./IPetList";
import styles from "./PetList.module.scss";
import Pet from "../../ui/Pet/Pet";
const PetList: FC<IPetList> = ({ pets = [] }) => {
  return (
    <div>
      {pets.length ? (
        <div>
          <div>
            My Pets <span className={styles.amountOfPets}>({pets.length})</span>
          </div>
          <div className={styles.petList}>
            {pets.map(pet => (
              <Pet img={pet.img} name={pet.name} key={pet.img} />
            ))}
          </div>
        </div>
      ) : (
        <h2 className={styles.notHave}>you don`t have pets</h2>
      )}
    </div>
  );
};

export default PetList;
