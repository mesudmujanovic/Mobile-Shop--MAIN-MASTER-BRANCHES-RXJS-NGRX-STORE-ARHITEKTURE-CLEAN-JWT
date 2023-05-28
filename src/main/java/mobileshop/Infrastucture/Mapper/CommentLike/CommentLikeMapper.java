package mobileshop.Infrastucture.Mapper.CommentLike;

import mobileshop.Entity.CommentLike;
import mobileshop.Infrastucture.Dto.CommentLikeDto;
import mobileshop.Intergration.DtoMapper;

public enum CommentLikeMapper implements DtoMapper<CommentLike, CommentLikeDto> {
    INSTANCE;
    @Override
    public CommentLike apply(CommentLikeDto commentLikeDto) {
        CommentLike commentLike = new CommentLike();
        commentLike.setId(commentLikeDto.getId());
        commentLike.setLikeCount(commentLikeDto.getLikeCount());
        commentLike.setCommentText(commentLikeDto.getCommentText());
        commentLike.setDislike(commentLikeDto.getDislike());
        return commentLike;
    }
}
