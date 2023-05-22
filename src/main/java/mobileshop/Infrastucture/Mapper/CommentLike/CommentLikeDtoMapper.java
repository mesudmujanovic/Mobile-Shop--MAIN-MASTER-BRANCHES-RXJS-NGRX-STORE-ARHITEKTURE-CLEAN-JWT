package mobileshop.Infrastucture.Mapper.CommentLike;

import mobileshop.Entity.CommentLike;
import mobileshop.Infrastucture.DTO.CommentLikeDto;
import mobileshop.Intergration.DtoMapper;

public enum CommentLikeDtoMapper implements DtoMapper<CommentLikeDto, CommentLike> {
    INSTANCE;
    @Override
    public CommentLikeDto apply(CommentLike commentLike) {
        CommentLikeDto commentLikeDto = new CommentLikeDto();
        commentLikeDto.setId(commentLike.getId());
        commentLikeDto.setLikeCount(commentLike.getLikeCount());
        commentLikeDto.setDislike(commentLike.getDislike());
        commentLikeDto.setCommentText(commentLike.getCommentText());
        return commentLikeDto;
    }
}
