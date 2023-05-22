package mobileshop.Infrastucture.Request;

import lombok.Data;

@Data
public class CommentLikeRequest {
    private Integer likeCount;
    private Integer dislike;
    private String commentText;
}
