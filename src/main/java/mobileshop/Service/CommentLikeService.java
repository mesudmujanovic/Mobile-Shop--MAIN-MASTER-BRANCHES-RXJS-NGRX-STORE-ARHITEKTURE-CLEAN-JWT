package mobileshop.Service;

import mobileshop.Infrastucture.DTO.CommentLikeDto;

import java.util.List;

public interface CommentLikeService {

    public CommentLikeDto saveCommentLike(CommentLikeDto commentLikeDto);

    public List<CommentLikeDto> getAllCommLike();
}
