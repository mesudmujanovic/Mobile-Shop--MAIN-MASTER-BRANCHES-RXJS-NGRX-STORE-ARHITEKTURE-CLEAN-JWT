package mobileshop.Infrastucture.DTO;

import lombok.Data;
import mobileshop.Infrastucture.Request.CommentLikeRequest;
import mobileshop.Infrastucture.Response.CommentLikeResponse;

@Data
public class CommentLikeDto {

    private Long id;
    private Integer likeCount;
    private Integer dislike;
    private String commentText;

    public static CommentLikeDto fromRequestToDto(CommentLikeRequest comRequest){
        CommentLikeDto commDto = new CommentLikeDto();
        commDto.setLikeCount(comRequest.getLikeCount());
        commDto.setCommentText(comRequest.getCommentText());
        commDto.setDislike(comRequest.getDislike());
        return commDto;
    }

    public CommentLikeResponse fromDtoToResponse(){
        CommentLikeResponse comResponse = new CommentLikeResponse();
        comResponse.setId(this.getId());
        comResponse.setCommentText(this.getCommentText());
        comResponse.setLikeCount(this.getLikeCount());
        comResponse.setDislike(this.getDislike());
        return comResponse;
    }


}
