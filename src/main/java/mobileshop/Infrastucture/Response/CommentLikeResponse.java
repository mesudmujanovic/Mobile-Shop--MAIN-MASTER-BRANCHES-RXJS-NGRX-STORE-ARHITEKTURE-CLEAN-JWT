package mobileshop.Infrastucture.Response;

import lombok.Data;

@Data
public class CommentLikeResponse {

    private Long id;
    private Integer likeCount;
    private Integer dislike;
    private String commentText;
}
