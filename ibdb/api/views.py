from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse

from .models import User
from .models import Book
from .models import Review
from .serializers import BookSerializer, NewBookSerializer, UserSerializer, NewUserSerializer, AddToWishlistSerializer, ReviewSerializer, NewReviewSerializer

# Create your views here.

# class GetAllBooks(APIView):


def get_all_books(request):
    data = Book.objects.all().values()
    return JsonResponse(list(data), safe=False)


class BookView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class GetBook(APIView):
    serializer_class = BookSerializer
    lookuk_url_kwarg = 'bookId'

    def get(self, request, format=None):
        bookId = request.GET.get(self.lookuk_url_kwarg)
        if bookId != None:
            book = Book.objects.filter(bookId=bookId)
            if len(book) > 0:
                data = BookSerializer(book[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Book Not Found': 'Invalid Book ID'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)

    # Funker ikke
    def put(self, request, format=None):
        bookId = request.GET.get(self.lookuk_url_kwarg)
        serializer = self.serializer_class(data=request.data)
        if bookId != None:
            book = Book.objects.filter(bookId=bookId)
            if serializer.is_valid():
                book.update(totalRatingScore=serializer.data.get(
                    'totalRatingScore'))
                book.update(numberOfRatings=serializer.data.get(
                    'numberOfRatings'))
                return Response(BookSerializer(book).data, status=status.HTTP_200_OK)
            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class SearchTitle(APIView):
    serializer_class = BookSerializer
    lookuk_url_kwarg = 'title'

    def get(self, request, format=None):
        title = request.GET.get(self.lookuk_url_kwarg)
        if title != None:
            book = Book.objects.filter(title=title)
            if len(book) > 0:
                data = BookSerializer(book[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Book Not Found': 'Invalid Book ID'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class NewBookView(APIView):
    serializer_class = NewBookSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            bookId = serializer.data.get('bookId')
            title = serializer.data.get('title')
            genre = serializer.data.get('genre')
            author = serializer.data.get('author')
            year = serializer.data.get('year')
            description = serializer.data.get('description')
            totalRatingScore = serializer.data.get('totalRatingScore')
            numberOfRatings = serializer.data.get('numberOfRatings')
            imageURL = serializer.data.get('imageURL')
            queryset = Book.objects.filter(bookId=bookId)
            if queryset.exists():
                book = queryset[0]
                book.bookId = bookId
                book.title = title
                book.genre = genre
                book.author = author
                book.year = year
                book.description = description
                book.totalRatingScore = totalRatingScore
                book.numberOfRatings = numberOfRatings
                book.imageURL = imageURL
                book.save(update_fields=['bookId', 'title', 'genre', 'author', 'year',
                          'description', 'totalRatingScore', 'numberOfRatings', 'imageURL'])
                return Response(BookSerializer(book).data, status=status.HTTP_200_OK)
            else:
                book = Book(bookId=bookId, title=title, genre=genre, author=author, year=year, description=description,
                            totalRatingScore=totalRatingScore, numberOfRatings=numberOfRatings, imageURL=imageURL)
                book.save()
                return Response(BookSerializer(book).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GetUser(APIView):
    serializer_class = UserSerializer
    lookuk_url_kwarg = 'username'

    def get(self, request, format=None):
        username = request.GET.get(self.lookuk_url_kwarg)
        if username != None:
            user = User.objects.filter(username=username)
            if len(user) > 0:
                data = UserSerializer(user[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'User Not Found': 'Invalid username'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class NewUserView(APIView):
    serializer_class = NewUserSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            admin = serializer.data.get('admin')
            wishlist = serializer.data.get('wishlist')
            queryset = User.objects.filter(username=username)
            if queryset.exists():
                user = queryset[0]
                user.username = username
                user.email = email
                user.password = password
                user.admin = admin
                user.wishlist = wishlist
                user.save(update_fields=[
                          'username', 'email', 'admin', 'password', 'wishlist'])
                return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
            else:
                user = User(username=username, email=email,
                            password=password, admin=admin, wishlist='')
                user.save()
                return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class GetWishlist(APIView):
    serializer_class = UserSerializer
    lookuk_url_kwarg = 'username'

    def get(self, request, format=None):
        username = request.GET.get(self.lookuk_url_kwarg)
        if username != None:
            user = User.objects.filter(username=username)
            if len(user) > 0:
                data = UserSerializer(user[0]).data.get('wishlist')
                return Response(data, status=status.HTTP_200_OK)
            return Response({'User Not Found': 'Invalid username'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class AddToWishlistView(APIView):
    serializer_class = AddToWishlistSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            wishlist = serializer.data.get('wishlist')
            queryset = User.objects.filter(username=username)
            if queryset.exists():
                user = queryset[0]
                user.username = username
                user.wishlist = wishlist
                user.save(update_fields=['username', 'wishlist'])
                return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
            else:
                return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class NewReviewView(APIView):
    serializer_class = NewReviewSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            bookId = serializer.data.get('bookId')
            rating = serializer.data.get('rating')
            comment = serializer.data.get('comment')
            print(username)
            queryset = Review.objects.filter(username=username, bookId=bookId)
            if queryset.exists():
                review = queryset[0]
                review.rating = rating
                review.comment = comment
                review.save(update_fields=['rating', 'comment'])
                return Response(UserSerializer(review).data, status=status.HTTP_200_OK)
            else:
                review = Review(username=username, bookId=bookId,
                                rating=rating, comment=comment)
                review.save()
                return Response(UserSerializer(review).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class ReviewView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


@api_view(['DELETE'])
def delete_review(request, name, id):
    query = Review.objects.filter(username=name, bookId=id)
    query.delete()
    return JsonResponse("Review deleted")
