package mobileshop.Entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "price")
public class Price {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Double price;

    private Integer contactDuration;

    private Boolean oneTime;

    @ManyToOne
    @JoinColumn(name = "tariffId")
    private Tariff tariff;
}
