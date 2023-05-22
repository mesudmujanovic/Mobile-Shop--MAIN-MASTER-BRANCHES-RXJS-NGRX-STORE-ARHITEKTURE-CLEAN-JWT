package mobileshop.Service.Impl;

import mobileshop.Entity.CommentLike;
import mobileshop.Infrastucture.DTO.CommentLikeDto;
import mobileshop.Infrastucture.Mapper.CommentLike.CommentLikeDtoMapper;
import mobileshop.Infrastucture.Mapper.CommentLike.CommentLikeMapper;
import mobileshop.Repository.CommentLikeRepository;
import mobileshop.Service.CommentLikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentLikeImpl implements CommentLikeService {

    @Autowired
    private CommentLikeRepository commentLikeRepository;

    @Override
    public CommentLikeDto saveCommentLike(CommentLikeDto commentLikeDto) {
        CommentLike commentLike  = CommentLikeMapper.INSTANCE.apply(commentLikeDto);
        CommentLike saveComLike = commentLikeRepository.save(commentLike);
        return CommentLikeDtoMapper.INSTANCE.apply(saveComLike);
    }

    @Override
    public List<CommentLikeDto> getAllCommLike() {
        List<CommentLike> commentLikeList = commentLikeRepository.findAll();
        return commentLikeList.stream().map(commeLi -> CommentLikeDtoMapper.INSTANCE.apply(commeLi)).collect(Collectors.toList());
    }
}
