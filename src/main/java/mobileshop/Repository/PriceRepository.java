package mobileshop.Repository;

import mobileshop.Entity.Price;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceRepository extends JpaRepository<Price,Long> {
}
